/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
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
import {
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	PictureEditing,
	AutoImage,
	ImageInsert
} from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link, AutoLink } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import {
	Table,
	TableToolbar,
	TableColumnResize,
	TableCellProperties,
	TableProperties,
	TableCaption
} from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Comments } from '@ckeditor/ckeditor5-comments';
import { TrackChanges } from '@ckeditor/ckeditor5-track-changes';
import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { RevisionHistory } from '@ckeditor/ckeditor5-revision-history';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import MathType from '@wiris/mathtype-ckeditor5';
import { SlashCommand } from '@ckeditor/ckeditor5-slash-command';

export default class ClassicEditor extends ClassicEditorBase {
	public static override builtinPlugins = [
		Essentials,
		UploadAdapter,
		Autoformat,
		Bold,
		Italic,
		Code,
		CodeBlock,
		BlockQuote,
		CKBox,
		CKFinder,
		CloudServices,
		EasyImage,
		Heading,
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		ImageInsert,
		AutoImage,
		Indent,
		Link, AutoLink,
		List,
		MediaEmbed,
		Paragraph,
		PasteFromOffice,
		PictureEditing,
		Table,
		TableToolbar, TableCellProperties, TableColumnResize, TableProperties, TableCaption,
		TextTransformation,
		Comments,
		TrackChanges,
		Autosave,
		SimpleUploadAdapter,
		// MathType,
		Mention,
		SlashCommand,
		RevisionHistory
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'italic',
				'link',
				'bulletedList',
				'numberedList',
				'code',
				'codeBlock',
				'|',
				'outdent',
				'indent',
				'|',
				'uploadImage',
				'insertImage',
				'blockQuote',
				'insertTable',
				'mediaEmbed',
				'undo',
				'redo',
				// 'MathType'
			]
		},
		image: {
			toolbar: [
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'|',
				'toggleImageCaption',
				'imageTextAlternative'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'toggleTableCaption',
				'tableCellProperties',
				'tableProperties'
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en',
		comments: {
			editorConfig: {
				// The list of plugins that will be included in the comments editors.
				extraPlugins: [ Bold, Italic, List, Autoformat, Mention ]
			}
		},
		codeBlock: {
			languages: [
				// Do not render the CSS class for the plain text code blocks.
				{ language: 'plaintext', label: 'Plain text', class: '' },
				{ language: 'python', label: 'Python' },
				{ language: 'javascript', label: 'JavaScript' }
			]
		}
	};

	public static defaultContextValues = {};
	private _contextValues = ClassicEditor.defaultContextValues;
	public get contextValues(): any {
		return this._contextValues;
	}
	public set contextValues( value: any ) {
		this._contextValues = value;
	}
}
