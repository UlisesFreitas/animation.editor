// types.d.ts


declare namespace InTemplateAnimations {
    
    interface Animation {
        name: string; // Unique name for the animation
        frames: string; // Frames to be used for the animation
    }

    interface AnimationTemplate {
        name: string; // Name of the animation
        frames: string; // Frames for the animation
    }

    interface AnimationTemplateCollection {
        [key: string]: AnimationTemplate; // Collection of animations
    }

    /**
     * Function to create animations in the template.
     * @catnipAsset template:template
     * @catnipIgnore
     * @param name - The unique name for the animation.
     * @param frames - The frames to be used for the animation.
     * @param source - The source of the graphic asset.
     * @returns A boolean indicating success or failure.
     */
    function intemplateanimations(name: string, frames: string, source: string): boolean;

}