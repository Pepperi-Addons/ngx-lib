import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PepSnackBarComponent } from './snack-bar.component';

export default {

}


// This creates a Story for the component
const Template: Story<PepSnackBarComponent> = (args: PepSnackBarComponent) => ({
    props: args
    
});

export const Base = Template.bind({});
Base.storyName = "Basic";