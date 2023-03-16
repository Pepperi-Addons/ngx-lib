import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { PepDraggableItemsModule } from './draggable-items.module';
import { PepDraggableItemsComponent } from './draggable-items.component';
import { CdkDragDrop, copyArrayItem, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IPepDraggableItem } from './draggable-items.model';

// This exports the Stories group for this component
export default {
    title: 'Components/Draggable items',
    component: PepDraggableItemsComponent,  
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [
                PepDraggableItemsModule,
                DragDropModule,
                SBNgxHelperModule
            ]
        })
    ],
    argTypes: {   
        containerId: {
            description: 'The id of the container',
        },
        showSearch: {
            description: 'Show a search box above the draggable-items panel if `true` and more then 5 items',
        },
        title:{
            description: 'The title above the draggable-items panel',
        },
        titleType: {
            description: 'The title type.',
            options: [
                'regular', 
                'none',
                'with-bottom-border'
            ],        
            control: { type: 'radio' },    
            table: {
                type: {
                    summary: 'PepDraggableItemsTitleType',                    
                },
                defaultValue: { summary: 'regular' },
            },
        },
        titleSizeType: {
            description: 'Title size type',
            options: [
                'xl', 
                'sm',
                'md',
                'lg',
                'xs'
            ],        
            control: { type: 'radio' },    
            table: {
                type: {
                    summary: 'PepSizeType',                    
                },
                defaultValue: { summary: 'xl' },
            }
        },
        itemPlaceholderType: {
            //! Unnecessary - is always 'weak'
            description: 'Placeholder type',
            options: [
                'weak', 
                'none',
                'regular'
            ],        
            control: { type: 'radio' },    
            table: {
                type: {
                    summary: 'weak | none | regular',                    
                },
                defaultValue: { summary: 'none' },
            }
        },
        dropAreaIds: {
            description: 'Whether draggable-items should drag into'
        },
        items: {
            //! not working?
            description: 'The draggable items within the list',            
            defaultValue: [],
            control: 'array',
            table: {
                type: {
                    summary: 'IPepDraggableItem[]'
                },
                defaultValue: {
                    summary: null
                }
            }
        },
        itemDragStarted: {
            action: 'itemDragStarted',
            description: 'Emits when a drag is start',
            control: false,
            table: {
                type: {
                    summary: 'EventEmitter<CdkDragStart<IPepDraggableItem>>'
                }
            }
        },
        itemDragEnded: {
            action: 'itemDragEnded',
            description: 'Emits when a drag is end',
            control: false,
            table: {
                type: {
                    summary: 'EventEmitter<CdkDragEnd<IPepDraggableItem>>'
                }
            }
        },
    },
    parameters: {
        controls: {
            include: [
                'containerId',
                'showSearch',
                'title',
                'titleType',
                'titleSizeType',
                'itemPlaceholderType',
                'dropAreaIds',
                'items',
                "itemDragStarted",
                'itemDragEnded'                
            ],
        }
    }
} as Meta;

let items = getDraggableItems();
function getDraggableItems(): any[] {
    return [
        { title: 'Tramontana', data: "S", disabled: true },
        { title: 'Greco', data: "NE" },
        { title: 'Levante', data: "E" },
        { title: 'Scirocco', data: "SE" },
        { title: 'Ostro', data: "S" },
        { title: 'Libeccio', data: "SW" },
        { title: 'Ponente', data: "W" },
        { title: 'Maestro', data: "NW" },
    ];
}

// This creates a Story for the component
const TemplateBase: Story<PepDraggableItemsModule> = (args: PepDraggableItemsModule) => ({
    props: {
        ...args,
        items: items,
        itemPlaceholderType: 'weak',
        titleSizeType: 'sm',
        itemDragStarted: action('itemDragStarted'),
        itemDragEnded: action('itemDragEnded')
        
    },
});

export const Story1 = TemplateBase.bind({});
Story1.args = {}
Story1.storyName = "Basic"

let dropArea = [];
let draggableItems = getDraggableItems();

function drop(event: CdkDragDrop<IPepDraggableItem[]>) {
    // debugger;
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        // transferArrayItem(
        //     event.previousContainer.data,
        //     dropArea,
        //     event.previousIndex,
        //     event.currentIndex,
        // );

        copyArrayItem(
            event.previousContainer.data,
            dropArea,
            event.previousIndex,
            event.currentIndex,
        );

        const item = draggableItems.find(item => item === dropArea[event.currentIndex]);
        if (item) {
            item.disabled = true;
        }
    }
}

const Template: Story<PepDraggableItemsModule> = (args: PepDraggableItemsModule) => ({
    props: {
        ...args,
        items: draggableItems,
        dropArea: dropArea, 
        drop: (event) => drop(event),
        itemDragStarted: action('itemDragStarted'),
        itemDragEnded: action('itemDragEnded'),
    },
    template: `
        <div style="display:flex; gap:2rem;">
            <div cdkDropList [cdkDropListData]="items" >
                <pep-draggable-items [items]="items" title="Available items" titleType="with-bottom-border" 
                    itemPlaceholderType="weak" titleSizeType="md" [showSearch]="false" [dropAreaIds]="['dropArea1']">
                </pep-draggable-items>
            </div>
            <div cdkDropList id="dropArea1" (cdkDropListDropped)="drop($event)" 
                style="border: 1px solid #ccc; width: 200px; min-height: 200px; 
                    display:flex; gap: 0.5rem; flex-direction: column; padding: 1rem; border-radius: 0.25rem;">
                <p style="margin: auto auto !important; display: flex;" *ngIf="!dropArea.length">Drop here </p>    

                <pep-draggable-item *ngFor="let item of dropArea"
                    [title]="item.title" [data]="item.data" >
                </pep-draggable-item>
            </div>
        </div>
    `
});

export const Story2 = Template.bind({});
Story2.storyName = 'Drag into area';
Story2.parameters = {
    docs: {
        description: {
            story: "Drag items form the _Available items_ list into the drop area" ,
        },
    },  
};

export const Story3 = TemplateBase.bind({});
Story3.storyName = 'Show search box';
Story3.args = {
    showSearch: true,
    title: "Hey ya'll"
};
Story3.parameters = {
    docs: {
        description: {
            story: "Here you can filter out items by using the search box" ,
        },
    },  
}
;
export const Story4 = TemplateBase.bind({});
//! Can we manually sort the list?
Story4.storyName = 'Change list order';
Story4.args = {
    //! Do we have something like that?
    //! isDraggable: true
};
Story4.parameters = {
    docs: {
        description: {
            story: "Drag items inside the list to change their order" ,
        },
    },  
};

// const Story5T: Story<PepDraggableItemsModule> = (args: PepDraggableItemsModule) => ({
//     props: {
//         ...args,
//         // items: items,
//         itemDragStarted: action('itemDragStarted'),
//         itemDragEnded: action('itemDragEnded')
//     }
// });
// export const Story5 = Story5T.bind({});
// Story5.storyName = 'Temp list';
// Story5.parameters = {
//     docs: {
//         description: {
//             story: "For this to work you'll need to select an icon with `iconName`" ,
//         },
//     },  
// };
