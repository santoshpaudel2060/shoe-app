// src/components/Avatar.tsx

import React from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: string;
  onClick?: () => void;
  initial?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "40px",
  onClick,
  initial,
}) => {
  return src ? (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className="rounded-full cursor-pointer object-cover"
      style={{ width: size, height: size }}
    />
  ) : (
    <div
      onClick={onClick}
      className="rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer"
      style={{
        width: size,
        height: size,
        fontSize: "1rem",
        fontWeight: "bold",
      }}
    >
      {initial}
    </div>
  );
};

export default Avatar;
