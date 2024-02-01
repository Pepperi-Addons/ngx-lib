import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSmartFiltersComponent } from './smart-filters.component';
import { PepSmartFiltersModule } from './smart-filters.module';

import { action } from '@storybook/addon-actions';
import { IPepSmartFilterField, IPepSmartFilterFieldOption } from './common/model/field';
import { IPepSmartFilterData } from './common/model/filter';
import { createSmartFilterField } from './common/model/creator';

// This exports the Stories group for this component
export default {
    title: 'Components/Smart filters',
    component: PepSmartFiltersComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepSmartFiltersModule, SBNgxHelperModule],
        }),
    ],
    // args: {
    // },
    argTypes: {
        title: {
            description: 'This is the title of the component',
            control: 'text',
            table: {
                defaultValue: { summary: null },
            }
        },
        filters: {
            description: 'The filters within the list',            
            defaultValue: [],
            control: 'array',
            table: {
                type: {
                    summary: 'IPepSmartFilterData[]'
                },
                defaultValue: {
                    summary: null
                }
            }
        },
        fields: {
            description: 'The fields that can have filters',            
            defaultValue: [],
            control: 'array',
            table: {
                type: {
                    summary: 'IPepSmartFilterField[]'
                },
                defaultValue: {
                    summary: null
                }
            }
        },
        filtersChange: {
            action: 'filtersChange',
            description: 'Emits after filter is changed',
            control: false,
            table: {
                type: {
                    summary: 'EventEmitter<IPepSmartFilterData[]>'
                }
            }
        },
        fieldToggleChange: {
            action: 'fieldToggleChange',
            description: 'Emits after click on field',
            control: false,
            table: {
                type: {
                    summary: 'EventEmitter<IPepSmartFilterField>'
                }
            }
        }
    },
    parameters: {
        controls: {
            include: [
                'title',
                'filters',
                'fields',
                'filtersChange',
                'fieldToggleChange',
            ],
        },
    },
} as Meta;

const fields: Array<IPepSmartFilterField> = getSmartFiltersFields();
const filters: Array<IPepSmartFilterData> = [];

function getSmartFiltersFields(): Array<IPepSmartFilterField> {
    const brandOptions: IPepSmartFilterFieldOption[] = [];
    for (let index = 1; index <= 10000; index++) {
        brandOptions.push({ value: `value ${index}`, count: index });
    }

    return [
        createSmartFilterField({ id: 'filter3', name: 'Date' }, 'date'),
        createSmartFilterField({ id: 'filter1', name: 'Datetime' }, 'date-time'),
        createSmartFilterField({ id: 'filter2', name: 'Numbers' }, 'int'),
        createSmartFilterField({ id: 'filter4', name: 'Multi select', options: brandOptions }, 'multi-select'),
        createSmartFilterField({ id: 'filter5', name: 'Boolean' }, 'boolean'),
        createSmartFilterField({ id: 'filter6', name: 'Currency' }, 'currency'),
        createSmartFilterField({ id: 'filter8', name: 'Text' }, 'text'),
    ];
}


// This creates a Story for the component
const Template: Story<PepSmartFiltersComponent> = (args: PepSmartFiltersComponent) => ({
    props: {
        ...args,
        // fields: fields,
        // filters: filters,
        filtersChange: action('filtersChange'),
        fieldToggleChange: action('fieldToggleChange')
    },
    template: `
        <pep-smart-filters title="Test filters" [fields]="fields" [filters]="filters"
            (filtersChange)="filtersChange($event)" (fieldToggleChange)="fieldToggleChange($event)">
        </pep-smart-filters>
    `,
});

export const Base = Template.bind({});
Base.storyName = "Smart filters"
Base.args = {
    fields: fields,
    filters: filters,
}