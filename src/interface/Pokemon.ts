export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        back_default: string;  // Ảnh mặt sau
        front_default: string; // Ảnh mặt trước
    };
};
