import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepButtonComponent } from './button.component';
import { PepButtonModule } from './button.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'Components/Button',
    component: PepButtonComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepButtonModule, SBNgxHelperModule],
        }),
    ],
    // args: {
    // },
    argTypes: {
        value: {
            description:
                'The button text',
        },
        visible: commonArgTypes.visible,
        disabled: commonArgTypes.disabled,
        iconPosition: {
            table: {
                defaultValue: { summary: 'end' },
            },
        },
        iconName: commonArgTypes.iconName,
        sizeType: commonArgTypes.sizeType,
        styleStateType: commonArgTypes.styleStateType,
        styleType: commonArgTypes.styleType,
        classNames: {
            description:
                'You acn add any class to the button, e.g. type `rotate3d` in the control input and see what happens',
        },
        buttonClick: {
            action: 'buttonClick',
            control: false,
        },
    },
    parameters: {
        controls: {
            include: [
                'value',
                'visible',
                'disabled',
                'iconPosition',
                'iconName',
                'sizeType',
                'styleStateType',
                'styleType',
                'classNames',
                'buttonClick',
            ],
        },
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepButtonComponent> = (args: PepButtonComponent) => ({
    props: {
        ...args,
        buttonClick: action('buttonClick'),
    },
    // template: `
    //     <pep-button [value]="value" [disabled]="disabled" [styleType]="styleType" [styleStateType]="styleStateType" [sizeType]="sizeType" [iconName]="iconName"
    //     [iconPosition]="iconPosition" [visible]="visible" (buttonClick)="buttonClick($event)"></pep-button>
    // `,
});

export const Story1 = Template.bind({});
Story1.storyName = 'Basic';
Story1.args = {
    value: 'Click me you fool',
};

export const Story2 = Template.bind({});
Story2.storyName = 'Disabled';
Story2.args = {
    disabled: true,
    value: 'Disabled',
};

export const Story3 = Template.bind({});
Story3.storyName = 'Icon on start';
Story3.args = {
    iconName: 'system_bolt',
    iconPosition: 'start',
    value: 'Icon start',
};

export const Story4 = Template.bind({});
Story4.storyName = 'Icon on end';
Story4.args = {
    iconName: 'system_bolt',
    iconPosition: 'end',
    value: 'Icon end',
};

export const Story5 = Template.bind({});
Story5.storyName = 'Icon only';
Story5.args = {
    iconName: 'system_bolt',
    iconPosition: 'end',
};

// This creates a Story for the component
const ButtonsTemplate: Story<PepButtonComponent> = (
    args: PepButtonComponent
) => ({
    props: args,
    template: `
<div class="this-layout">
<section>
    <div class="set-grid" style="gap: 0.5rem">
            <h2 class="body-lg color-dimmed">Strong</h2>
            <div class="side-grid flex-wrap" id="strong-button-set">
                <pep-button
                    value="Disabled"
                    styleType="strong"
                    sizeType="xs"
                    [disabled]="true"
                ></pep-button>
                <pep-button
                    value="XS"
                    styleType="strong"
                    sizeType="xs"
                ></pep-button>
                <pep-button
                    value="SM"
                    styleType="strong"
                    sizeType="sm"
                ></pep-button>
                <pep-button
                    value="MD"
                    styleType="strong"
                    sizeType="md"
                ></pep-button>
                <pep-button
                    value="Start"
                    styleType="strong"
                    sizeType="md"
                    iconName="system_bolt"
                    iconPosition="start"
                ></pep-button>
                <pep-button
                    value="End"
                    styleType="strong"
                    sizeType="md"
                    iconName="system_bolt"
                    iconPosition="end"
                ></pep-button>
                <pep-button
                    styleType="strong"
                    sizeType="md"
                    iconName="system_bolt"
                ></pep-button>
                <pep-button
                    value="classNames"
                    styleType="strong"
                    sizeType="md"
                    classNames="body-2xs rotate3d"
                ></pep-button>
                <pep-button
                    value="Success"
                    styleType="strong"
                    sizeType="md"
                    styleStateType="success"
                ></pep-button>
                <pep-button
                    value="Caution"
                    styleType="strong"
                    sizeType="md"
                    styleStateType="caution"
                ></pep-button>
                <pep-button
                    value="LG"
                    styleType="strong"
                    sizeType="lg"
                ></pep-button>
                <pep-button
                    value="XL"
                    styleType="strong"
                    sizeType="xl"
                ></pep-button>
            </div>
            <h2 class="body-lg color-dimmed">Regular</h2>
            <div class="side-grid flex-wrap" id="regular-button-set">
                <pep-button
                    value="Disabled"
                    styleType="regular"
                    sizeType="xs"
                    [disabled]="true"
                ></pep-button>
                <pep-button
                    value="XS"
                    styleType="regular"
                    sizeType="xs"
                ></pep-button>
                <pep-button
                    value="SM"
                    styleType="regular"
                    sizeType="sm"
                ></pep-button>
                <pep-button
                    value="MD"
                    styleType="regular"
                    sizeType="md"
                ></pep-button>
                <pep-button
                    value="Start"
                    styleType="regular"
                    sizeType="md"
                    iconName="system_bolt"
                    iconPosition="start"
                ></pep-button>
                <pep-button
                    value="End"
                    styleType="regular"
                    sizeType="md"
                    iconName="system_bolt"
                    iconPosition="end"
                ></pep-button>
                <pep-button
                    styleType="regular"
                    sizeType="md"
                    iconName="system_bolt"
                ></pep-button>
                <pep-button
                    value="classNames"
                    styleType="regular"
                    sizeType="md"
                    classNames="body-2xs rotate3d"
                ></pep-button>
                <pep-button
                    value="Success"
                    styleType="regular"
                    sizeType="md"
                    styleStateType="success"
                ></pep-button>
                <pep-button
                    value="Caution"
                    styleType="regular"
                    sizeType="md"
                    styleStateType="caution"
                ></pep-button>
                <pep-button
                    value="LG"
                    styleType="regular"
                    sizeType="lg"
                ></pep-button>
                <pep-button
                    value="XL"
                    styleType="regular"
                    sizeType="xl"
                ></pep-button>
            </div>
            <h2 class="body-lg color-dimmed">Weak</h2>
            <div class="side-grid flex-wrap" id="weak-button-set">
                <pep-button
                    value="Disabled"
                    styleType="weak"
                    sizeType="xs"
                    [disabled]="true"
                ></pep-button>
                <pep-button
                    value="XS"
                    styleType="weak"
                    sizeType="xs"
                    ></pep-button>
                <pep-button
                    value="SM"
                    styleType="weak"
                    sizeType="sm"
                ></pep-button>
                <pep-button
                    value="MD"
                    styleType="weak"
                    sizeType="md"
                ></pep-button>
                <pep-button
                    value="Start"
                    styleType="weak"
                    sizeType="md"
                    iconName="system_bolt"
                    iconPosition="start"
                ></pep-button>
                <pep-button
                    value="End"
                    styleType="weak"
                    sizeType="md"
                    iconName="system_bolt"
                    iconPosition="end"
                ></pep-button>
                <pep-button
                    styleType="weak"
                    sizeType="md"
                    iconName="system_bolt"
                ></pep-button>
                <pep-button
                    value="classNames"
                    styleType="weak"
                    sizeType="md"
                    classNames="body-2xs rotate3d"
                ></pep-button>
                <pep-button
                    value="Success"
                    styleType="weak"
                    sizeType="md"
                    styleStateType="success"
                ></pep-button>
                <pep-button
                    value="Caution"
                    styleType="weak"
                    sizeType="md"
                    styleStateType="caution"
                ></pep-button>
                <pep-button
                    value="LG"
                    styleType="weak"
                    sizeType="lg"
                ></pep-button>
                <pep-button
                    value="XL"
                    styleType="weak"
                    sizeType="xl"
                ></pep-button>
            </div>
            <h2 class="body-lg color-dimmed">Weak Invert</h2>
            <div class="side-grid flex-wrap" id="weak-invert-button-set">
                <pep-button
                    value="Disabled"
                    styleType="weak-invert"
                    sizeType="xs"
                    [disabled]="true"
                ></pep-button>
                <pep-button
                    value="XS"
                    styleType="weak-invert"
                    sizeType="xs"
                ></pep-button>
                <pep-button
                    value="SM"
                    styleType="weak-invert"
                    sizeType="sm"
                ></pep-button>
                <pep-button
                    value="MD"
                    styleType="weak-invert"
                    sizeType="md"
                ></pep-button>
                <pep-button
                    value="Start"
                    styleType="weak-invert"
                    sizeType="md"
                    iconName="system_bolt"
                    iconPosition="start"
                ></pep-button>
                <pep-button
                    value="End"
                    styleType="weak-invert"
                    sizeType="md"
                    iconName="system_bolt"
                    iconPosition="end"
                ></pep-button>
                <pep-button
                    styleType="weak-invert"
                    sizeType="md"
                    iconName="system_bolt"
                ></pep-button>
                <pep-button
                    value="classNames"
                    styleType="weak-invert"
                    sizeType="md"
                    classNames="body-2xs rotate3d"
                ></pep-button>
                <pep-button
                    value="LG"
                    styleType="weak-invert"
                    sizeType="lg"
                ></pep-button>
                <pep-button
                    value="XL"
                    styleType="weak-invert"
                    sizeType="xl"
                ></pep-button>
            </div>
            <!-- TODO -->
            <span style="display: none">
                <pep-button
                    [value]="'toggle menu'"
                    [classNames]="'pep-spacing-element'"
                    (click)="toggleMenu()"
                >
                </pep-button>
                <pep-button
                    [value]="'test 1'"
                    [sizeType]="'sm'"
                    [styleType]="'regular'"
                    [classNames]="'pep-spacing-element '"
                >
                </pep-button>
                <pep-button
                    [sizeType]="'sm'"
                    [classNames]="'pep-spacing-element '"
                    [value]="'Tomer test'"
                    [iconName]="'system_bolt'"
                >
                </pep-button>
                <pep-button
                    [value]="'toggle menu'"
                    [classNames]="'pep-spacing-element'"
                    (click)="toggleMenu()"
                >
                </pep-button>
                <button
                    class="pep-spacing-element pep-button sm pull-right flip"
                    mat-button
                >
                    Kof Examples
                </button>
                <button class="pep-button sm pep-spacing-element">
                    button
                </button>
                <pep-button
                    [value]="'test 2'"
                    [sizeType]="'sm'"
                    [classNames]="'pep-spacing-element '"
                    [iconName]="'system_settings'"
                >
                </pep-button
            ></span>
        </div>
    </section>
</div>
`,
});

export const Story6 = ButtonsTemplate.bind({});
Story6.storyName = 'Styles, options and sizes';