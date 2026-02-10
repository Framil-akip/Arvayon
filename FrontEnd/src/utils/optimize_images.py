import os
from PIL import Image

ASSETS_DIR = 'src/assets'

def optimize_images():
    print(f"Scanning {ASSETS_DIR}...")
    total_saved = 0
    
    for filename in os.listdir(ASSETS_DIR):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(ASSETS_DIR, filename)
            filesize = os.path.getsize(filepath)
            
            # Open image
            try:
                img = Image.open(filepath)
                # Save as WebP
                webp_filename = os.path.splitext(filename)[0] + '.webp'
                webp_filepath = os.path.join(ASSETS_DIR, webp_filename)
                
                img.save(webp_filepath, 'WEBP', quality=85)
                
                webp_size = os.path.getsize(webp_filepath)
                saved = filesize - webp_size
                total_saved += saved
                
                print(f"Converted {filename} ({filesize/1024:.1f}KB) -> {webp_filename} ({webp_size/1024:.1f}KB) | Saved: {saved/1024:.1f}KB")
                
            except Exception as e:
                print(f"Error converting {filename}: {e}")

    print(f"\nTotal Space Saved: {total_saved/1024/1024:.2f} MB")

if __name__ == "__main__":
    optimize_images()
