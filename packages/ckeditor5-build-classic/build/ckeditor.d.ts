/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { List } from '@ckeditor/ckeditor5-list';
export default class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: any[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
        language: string;
        comments: {
            editorConfig: {
                extraPlugins: (typeof Autoformat | typeof Mention | typeof Bold | typeof Italic | typeof List)[];
            };
        };
        codeBlock: {
            languages: ({
                language: string;
                label: string;
                class: string;
            } | {
                language: string;
                label: string;
                class?: undefined;
            })[];
        };
    };
    static defaultContextValues: {};
    private _contextValues;
    get contextValues(): any;
    set contextValues(value: any);
}
