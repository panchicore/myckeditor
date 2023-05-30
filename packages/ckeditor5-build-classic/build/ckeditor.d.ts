/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { UploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { Bold, Italic, Code } from '@ckeditor/ckeditor5-basic-styles';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing, AutoImage, ImageInsert } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link, AutoLink } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar, TableColumnResize, TableCellProperties, TableProperties, TableCaption } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Comments } from '@ckeditor/ckeditor5-comments';
import { TrackChanges } from '@ckeditor/ckeditor5-track-changes';
import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { RevisionHistory } from '@ckeditor/ckeditor5-revision-history';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { SlashCommand } from '@ckeditor/ckeditor5-slash-command';
export default class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof TextTransformation | typeof Essentials | typeof SimpleUploadAdapter | typeof UploadAdapter | typeof Paragraph | typeof Heading | typeof Autoformat | typeof Mention | typeof Bold | typeof Code | typeof Italic | typeof CodeBlock | typeof BlockQuote | typeof CloudServices | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof CKBox | typeof CKFinder | typeof EasyImage | typeof Indent | typeof AutoLink | typeof Link | typeof List | typeof MediaEmbed | typeof PasteFromOffice | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof Autosave | typeof SlashCommand | typeof PictureEditing | typeof Comments | typeof TrackChanges | typeof RevisionHistory)[];
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
