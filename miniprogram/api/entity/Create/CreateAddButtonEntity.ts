
export class CreateAddButtonEntity {

    public title: string = "Image，Video，Audio，or 3D Mode";
    public details: string = "Flie types supported：JPG，PNG，GIF，SVG，MP4，WEBM，MP3，WAV，OGG，GLB，GLTF，Max size：100 MB. ";

    public static init(title:string, details: string): CreateAddButtonEntity {
        const self = new CreateAddButtonEntity();
        self.title = title;
        self.details = details;        
        return self;
    }
}