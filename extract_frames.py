import cv2
import os

video_path = r'public/sequence/Whisk_udm2qwyxqwmlrjyz0ymjhdotmwoxqtlyu2m00yy (1).mp4'
output_dir = r'public/sequence'

cap = cv2.VideoCapture(video_path)

if not cap.isOpened():
    print("Error: Cannot open video file")
    exit(1)

frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
print(f"Total frames in video: {frame_count}")

frame_index = 0
count = 0

while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Save frame with the same naming pattern
    frame_name = f"frame_{frame_index:03d}_delay-0.066s.png"
    frame_path = os.path.join(output_dir, frame_name)
    cv2.imwrite(frame_path, frame)
    
    frame_index += 1
    count += 1
    
    if count % 10 == 0:
        print(f"Extracted {count} frames...")

cap.release()
print(f"✓ Successfully extracted {frame_index} frames!")
