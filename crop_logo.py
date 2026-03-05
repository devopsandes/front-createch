import sys
from PIL import Image, ImageDraw, ImageChops

def trim(im):
    grayscale = im.convert("L")
    bg = Image.new("L", grayscale.size, 0) # Black bg
    diff = ImageChops.difference(grayscale, bg)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

def create_circular_favicon(input_path, output_png_path, output_ico_path):
    img = Image.open(input_path).convert("RGBA")
    
    # Crop to just the logo pixels
    trimmed_img = trim(img)
    
    # Make a square Canvas with black background
    w, h = trimmed_img.size
    max_dim = max(w, h)
    
    square_logo = Image.new('RGBA', (max_dim, max_dim), (0, 0, 0, 255))
    square_logo.paste(trimmed_img, ((max_dim - w) // 2, (max_dim - h) // 2))
    
    # Resize so it perfectly fits inside a circle of diameter 128.
    # The maximum square size that fits in a circle of diameter 128 is 128/sqrt(2) = 90.5
    # Let's use 88 just to give a tiny bit of breathing room and avoid anti-aliasing artifacts on the edge.
    logo_target_size = 88
    resized_logo = square_logo.resize((logo_target_size, logo_target_size), Image.Resampling.LANCZOS)
    
    # Create the transparent 128x128 canvas
    target_size = 128
    result = Image.new('RGBA', (target_size, target_size), (0, 0, 0, 0))
    
    # Draw the black circle
    draw = ImageDraw.Draw(result)
    draw.ellipse((0, 0, target_size - 1, target_size - 1), fill=(0, 0, 0, 255))
    
    # Paste the square logo into the center. Since the square is black and fits inside the circle,
    # it merges flawlessly with the black circle background.
    offset = (target_size - logo_target_size) // 2
    
    # Do not use mask, just paste it to overwrite the RGBA directly
    result.paste(resized_logo, (offset, offset))
    
    # Save the new optimized Favicon
    result.save(output_png_path, format="PNG")
    result.save(output_ico_path, format="ICO", sizes=[(32, 32), (64, 64), (128, 128)])

if __name__ == "__main__":
    create_circular_favicon(sys.argv[1], sys.argv[2], sys.argv[3])
