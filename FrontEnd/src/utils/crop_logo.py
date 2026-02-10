from PIL import Image
import os

def crop_image(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # Get the bounding box of the non-zero regions
        bbox = img.getbbox()
        
        if bbox:
            # Crop the image to the bounding box
            cropped_img = img.crop(bbox)
            cropped_img.save(output_path)
            print(f"Successfully cropped {input_path} and saved to {output_path}")
            print(f"Original size: {img.size}, New size: {cropped_img.size}")
        else:
            print("Image is entirely transparent!")
            
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    # Define paths relative to this script or absolute
    base_dir = os.path.dirname(os.path.abspath(__file__))
    # Go up one level to src, then assets
    input_file = os.path.join(base_dir, '..', 'assets', 'logo-full.png')
    output_file = os.path.join(base_dir, '..', 'assets', 'logo-cropped.png')
    
    crop_image(input_file, output_file)
