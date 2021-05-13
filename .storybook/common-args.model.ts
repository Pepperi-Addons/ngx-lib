// .storybook/common-args.model.ts

export const commonArgTypes = {
    label: {
        description: 'This is the label of the component',
        control: 'text',
        table: {
            defaultValue: { summary: null },
        }
    },
    value: {
        description: 'This is the value of the component',
        control: 'text',
        table: {
            defaultValue: { summary: null },
        }
    },
    // layoutType: {
    //     // name: 'layoutType',
    //     defaultValue: 'form',
    //     description: 'This is the layout type of the component',
    //     control: {
    //         type: 'radio',
    //         options: ['form', 'card', 'table'],
    //     },
    //     table: {
    //         type: {
    //             summary: 'something short',
    //             detail: 'something really really long',
    //         },
    //         defaultValue: { summary: 'form' },
    //     },
    // },
    xAlignment: {
        defaultValue: 'left',
        description: 'This is the horizontal alignment of the component',
        control: {
            type: 'radio',
            options: ['left', 'center', 'right'],
        },
        table: {
            defaultValue: { summary: 'left' },
        }
    },
    textColor: {
        description: 'This is the text color of the component',
        control: {
            type: 'color',
        },
        table: {
            type: {
                summary: 'color',
            },
        },
    },
    sizeType: {
        table: {
            defaultValue: { summary: 'md' },
        },
    },
    styleStateType: {
        table: {
            defaultValue: { summary: 'system' },
        },
    },
    styleType: {
        table: {
            defaultValue: { summary: 'weak' },
        },
    },
    classNames: {
        description:
            'Class names that should be on the menu element tag like classNames="class1 class2"',
    },
    iconName: {
        table: {
            defaultValue: { summary: null },
        },
    },
    mandatory: {
        description: 'If the component is mandatory',
        defaultValue: false,
        control: {
            type: 'boolean',
        },
        table: {
            defaultValue: { summary: 'false' },
        }
    },
    disabled: {
        description: 'If the component is disabled',
        defaultValue: false,
        control: {
            type: 'boolean',
        },
        table: {
            defaultValue: { summary: 'false' },
        }
    },
    readonly: {
        description: 'If the component is readonly',
        defaultValue: false,
        control: {
            type: 'boolean',
        },
        table: {
            defaultValue: { summary: 'false' },
        }
    },
    visible: {
        description: 'If the component is visible',
        defaultValue: true,
        control: {
            type: 'boolean',
        },
        table: {
            defaultValue: { summary: 'true' },
        }
    },
    showTitle: {
        description: 'If should show the component title',
        defaultValue: true,
        control: {
            type: 'boolean',
        },
        table: {
            defaultValue: { summary: 'true' },
        }
    },
    renderTitle: {
        description: 'If should render the component title',
        defaultValue: true,
        control: {
            type: 'boolean',
        },
        table: {
            defaultValue: { summary: 'true' },
        }
    },
    renderError: {
        description: 'If should render the component error',
        defaultValue: true,
        control: {
            type: 'boolean',
        },
        table: {
            defaultValue: { summary: 'true' },
        }
    },
    renderSymbol: {
        description: 'If should render the component symbol',
        defaultValue: true,
        control: {
            type: 'boolean',
        },
        table: {
            defaultValue: { summary: 'true' },
        }
    },
    rowSpan: {
        description: 'The numbers of rows that the component should bo on (height)',
        defaultValue: 1,
        control: {
            type: 'number',
        },
        table: {
            defaultValue: { summary: 1 },
        }
    },
    valueChange: {
        action: 'valueChange',
        control: false
    },
    fileChange: {
        action: 'fileChange',
        control: false
    },
    elementClick: {
        action: 'elementClick',
        control: false
    },
}