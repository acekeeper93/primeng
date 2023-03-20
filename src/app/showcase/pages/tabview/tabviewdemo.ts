import { Component } from '@angular/core';
import { DisabledDoc } from '../../doc/tabview/disableddoc';
import { BasicDoc } from '../../doc/tabview/basicdoc';
import { ControlledDoc } from '../../doc/tabview/controlleddoc';
import { ImportDoc } from '../../doc/tabview/importdoc';
import { TemplateDoc } from '../../doc/tabview/customtemplatedoc';
import { ClosableDoc } from '../../doc/tabview/closabledoc';
import { ScrollableDoc } from '../../doc/tabview/scrollabledoc';
import { StyleDoc } from '../../doc/tabview/styledoc';
import { PropsDoc } from '../../doc/tabview/propsdoc';
import { EventsDoc } from '../../doc/tabview/eventsdoc';
import { TemplatesDoc } from '../../doc/tabview/templatesdoc';

@Component({
    templateUrl: './tabviewdemo.html',
    styleUrls: ['./tabviewdemo.scss']
})
export class TabViewDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'closable',
            label: 'Closable',
            component: ClosableDoc
        },
        {
            id: 'scrollable',
            label: 'Scrollable',
            component: ScrollableDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        }
    ];

    apiDocs = [
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDoc
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDoc
        },
        {
            id: 'templates',
            label: 'Templates',
            component: TemplatesDoc
        }
    ];
}
