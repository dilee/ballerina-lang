/**
 * Copyright (c) 2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

define(['require', 'jquery', 'd3', 'd3utils', 'backbone', 'lodash','./service'], function (require, $, d3, D3Utils, Backbone,  _,Service) {

    var ServicePreview = Service.extend({
        initialize: function (options) {

            var previewDiv = $("<div class='preview-div'></div>");

            var options =
            {
                "container": previewDiv
            }

            options.container = options.container[0];
            this._container = options.container;
            this.setPreviewMode(true);
            Service.prototype.initialize.call(this, options);

        },

        render: function () {

            Service.prototype.render.call(this);
            var mainParent = $("<div class='item'></div>");
            var previewParent = $("<div class='col-md-3 preview-parent'></div>");
            var fileName = $("<div class='file-name'>SampleConfiguration.bal</div>");
            var previewName = $("<div class='preview-name-div'></div>");
            previewName.append(fileName);
            previewParent.append(this._container);
            previewParent.append(previewName);
            mainParent.append(previewParent);
            return mainParent;

        }
    });
    return ServicePreview;
});
