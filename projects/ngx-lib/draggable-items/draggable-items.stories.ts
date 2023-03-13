import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { PepDraggableItemsModule } from './draggable-items.module';
import { PepDraggableItemsComponent } from './draggable-items.component';
import { CdkDragDrop, copyArrayItem, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IPepDraggableItem } from './draggable-items.model';

// This exports the Stories group for this component
export default {
    title: 'Components/draggable-items',
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
            description: 'show the search above the draggable-items panel',
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
        { title: 'draggable 1', data: 1, disabled: true },
        { title: 'draggable 2', data: 2 },
        { title: 'draggable 3', data: 3 },
        { title: 'draggable 4', data: 4 },
    ];
}

// This creates a Story for the component
const TemplateBase: Story<PepDraggableItemsModule> = (args: PepDraggableItemsModule) => ({
    props: {
        ...args,
        items: items,
        itemDragStarted: action('itemDragStarted'),
        itemDragEnded: action('itemDragEnded')
    }
});

export const Base = TemplateBase.bind({});
Base.args = {}

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
                <pep-draggable-items [items]="items" title="Available items" titleType="with-bottom-border" titleSize="md"
                    itemPlaceholderType="weak" [showSearch]="true" [dropAreaIds]="['dropArea1']">
                </pep-draggable-items>
            </div>
            <div cdkDropList id="dropArea1" (cdkDropListDropped)="drop($event)" 
                style="border: 1px solid #ccc; width: 200px; min-height: 200px; 
                    display:flex; gap: 0.5rem; flex-direction: column;">
                <p style="margin: auto auto !important; display: flex;" *ngIf="!dropArea.length">Drop here </p>    

                <pep-draggable-item *ngFor="let item of dropArea"
                    [title]="item.title" [data]="item.data" >
                </pep-draggable-item>
            </div>
        </div>
    `
});

export const Story1 = Template.bind({});
Story1.storyName = 'Drag into area';
Story1.args = {
    
};
