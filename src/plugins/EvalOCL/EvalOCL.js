/*globals define*/
/*jshint node:true, browser:true*/

/**
 * Generated by PluginGenerator 1.7.0 from webgme on Fri Nov 04 2016 12:14:42 GMT-0500 (Central Daylight Time).
 * A plugin that inherits from the PluginBase. To see source code documentation about available
 * properties and methods visit %host%/docs/source/PluginBase.html.
 */

define([
    'plugin/PluginConfig',
    'text!./metadata.json',
    'plugin/PluginBase',
    'plugin/PluginMessage',
    'common/util/ejs',
    'text!./Templates/language.ejs',
    'text!./Templates/model.ejs'
], function (
    PluginConfig,
    pluginMetadata,
    PluginBase,
    PluginMessage,
    ejs,
    languageTemplate,
    modelTemplate) {
    //'use strict';

    pluginMetadata = JSON.parse(pluginMetadata);

    /**
     * Initializes a new instance of EvalOCL.
     * @class
     * @augments {PluginBase}
     * @classdesc This class represents the plugin EvalOCL.
     * @constructor
     */
    var EvalOCL = function () {
        // Call base class' constructor.
        PluginBase.call(this);
        this.pluginMetadata = pluginMetadata;
    };

    /**
     * Metadata associated with the plugin. Contains id, name, version, description, icon, configStructue etc.
     * This is also available at the instance at this.pluginMetadata.
     * @type {object}
     */
    EvalOCL.metadata = pluginMetadata;

    // Prototypical inheritance from PluginBase.
    EvalOCL.prototype = Object.create(PluginBase.prototype);
    EvalOCL.prototype.constructor = EvalOCL;

    /**
     * Main function for the plugin to execute. This will perform the execution.
     * Notes:
     * - Always log with the provided logger.[error,warning,info,debug].
     * - Do NOT put any user interaction logic UI, etc. inside this method.
     * - callback always has to be called even if error happened.
     *
     * @param {function(string, plugin.PluginResult)} callback - the result callback
     */
    EvalOCL.prototype.main = function (callback) {
        // Use self to access core, project, result, logger etc from PluginBase.
        // These are all instantiated at this point.
        var self = this,
            artifact,
            languageText,
            nodeObject;


        // Using the logger.
        self.logger.debug('This is a debug message.');

        self.extractDataModel(self.rootNode)
            .then(function (nodes) {

                //self.logger.info(Object.keys(nodes));
                var dataModel = self.makeModelObject(nodes);
                var dataModelStr = JSON.stringify(dataModel, null, 4);
                self.dataModel = dataModel;
                //self.logger.info('************DataModel***********\n',dataModelStr);

                var langModel = self.makeLanguageObject(nodes);
                var langModelStr = JSON.stringify(langModel, null, 4);
                self.langModel = langModel;
                //self.logger.info('************LangModel***********\n',langModelStr);


                artifact = self.blobClient.createArtifact('project-data');


                var JSCodeLang = ejs.render(languageTemplate, self);

                var currentConfig = self.getCurrentConfig();
                self.currentConfig = currentConfig;

                var JSCodeModel = ejs.render(modelTemplate, self);

                var JSCode = JSCodeLang+JSCodeModel;
                self.logger.info('************Code is***********\n',JSCode);

                eval(JSCode);

                var OclEngine = require('ocl-js').default;
                var myEngine;

                myEngine = new OclEngine();

                myEngine.addOclExpression(currentConfig.Constraint);

                //var result = myEngine.evaluate(_1319592604);

                function convertName(name){
                    return name.replace(/ /g, "_").replace(/\//g, "_").replace(/\./g, "__").replace(/-/g,"_");
                }

                var object_to_be_evaluated = convertName(self.core.getPath(self.activeNode));

                var result;

                try{
                    result = eval('myEngine.evaluate('+object_to_be_evaluated+');');
                }
                catch(e) {
                    console.log("**********error",e);
                }


                //console.log('*********Ans is :',result);

                self.result.addMessage(new PluginMessage({
                    commitHash: self.commitHash,
                    activeNode: '', //always point to the root
                    message: result
                }));

                return artifact.addFiles({'dataModel.json':dataModelStr,'langModel.json':langModelStr, 'code.js': JSCode});
            })
            .then(function (fileHash) {
                self.result.addArtifact(fileHash);
                return artifact.save()
            })
            .then(function (artifactHash) {
                self.result.addArtifact(artifactHash);
                self.result.setSuccess(true);
                callback(null, self.result);
            })
            .catch(function (err) {
                self.logger.error(err.stack);
                // Result success is false at invocation.
                callback(err, self.result);
            }) ;
    };

    EvalOCL.prototype.extractDataModel = function (node) {
        var self = this;
        return self.core.loadSubTree(node)
            .then(function (nodeArr) {
                var nodes = {},
                    i;
                for (i = 0; i < nodeArr.length; i += 1) {
                    nodes[self.core.getPath(nodeArr[i])] = nodeArr[i];
                }
                return nodes;
            });
    };

    EvalOCL.prototype.makeLanguageObject = function (nodes) {
        var self = this,
            path,
            node,
            languageModel={};

        for (path in nodes) {
            node = nodes[path];
            if(node!=self.rootNode) {
                if (self.core.isMetaNode(node))
                    languageModel[self.core.getAttribute(self.getMetaType(node), 'name')] = self.info_of_language(node, nodes);
            }
        }
        return languageModel;
    };

    EvalOCL.prototype.info_of_language = function (node,nodes) {
        var self= this,
            childrenPaths,
            i,
            lang = {
                attributes:[],
                canHavechildren:'',
                pointers:[],
                sets:[]
            };

        lang.attributes = self.core.getValidAttributeNames(node);

        if(self.core.getChildrenMeta(node)!== null)
            lang.canHavechildren = true;
        else
            lang.canHavechildren = false;

        lang.pointers = self.core.getValidPointerNames(node);

        lang.sets = self.core.getValidSetNames(node);

        return lang;
    };


    EvalOCL.prototype.makeModelObject = function (nodes) {
        var self = this,
            path,
            node,
            dataModel={};

        for (path in nodes) {
            node = nodes[path];
            if(self.core.getAttribute(node, 'name')!="FCO")
            dataModel[self.core.getPath(node)] = self.info_of_model(node,nodes);
        }
        return dataModel;
    };


    EvalOCL.prototype.info_of_model = function (node,nodes) {
        var self= this,
            childrenPaths,
            metaNode,
            i,
            values = {
                name:'',
                children: [],
                _type: '',
                _isMeta: ''
            };

            values.name = self.core.getAttribute(node, 'name');
            //self.logger.info("Name is",values.name);
            childrenPaths = self.core.getChildrenPaths(node);
            if(childrenPaths.length>0)
                values.children= childrenPaths;

        if(node!=self.rootNode) {
            metaNode = self.getMetaType(node);
            values._type = self.core.getAttribute(metaNode, 'name');

            if (self.getMetaType(node) === node) {
                values._isMeta = true;
            }
            else {
                values._isMeta = false;
            }

            var keys = self.core.getValidAttributeNames(node);
            for (i = 0; i < keys.length; i += 1) {

                values[keys[i]] = self.core.getAttribute(node,keys[i]);
            }

            keys = self.core.getValidPointerNames(node);
            for (i = 0; i < keys.length; i += 1) {

                values[keys[i]] = self.core.getPointerPath(node, keys[i]);
            }

            keys = self.core.getValidSetNames(node);
            for (i = 0; i < keys.length; i += 1) {
                values[keys[i]] = self.core.getMemberPaths(node, keys[i]);
            }
        }
        return values;
    };

    return EvalOCL;
});