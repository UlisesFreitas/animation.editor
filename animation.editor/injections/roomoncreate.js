// roomoncreate.js

createTexturesFromAnimations(); 

// Function to process and create textures based on animations
function createTexturesFromAnimations() {
    //console.log("Starting to create textures from animations...");

    // Iterate over each template in the list
    for (const templateName in templates.list) {
        const instances = templates.list[templateName];
        if(instances.length > 0){
            // Check if instances have template animations
            instances.forEach((instance, index) => {
                const { templateanimations } = instance;

                if (templateanimations) {

                    templateanimations.forEach(animation => {
                        const { name, frames } = animation;

                        // Skip if no animation name or frames are defined
                        if (!name || !frames) {
                            return;
                        }

                        // Get the base texture for the template
                        const baseTexture = res.textures[templateName];

                        if (!baseTexture) {
                            return;
                        }

                        // Define the full texture name
                        const textureName = `${templateName}${name}`;

                        if(textureName){
                             // Create the new texture using the frames
                            intemplateanimations(textureName, frames.split(','), templateName);
                        }
                       
                    });
                }
            });
        }        
    }
}