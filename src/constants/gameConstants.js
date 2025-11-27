import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Game dimensions
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

// Lane configuration
export const LANE_WIDTH = width / 3;
export const LANES = [-LANE_WIDTH, 0, LANE_WIDTH];

// Object sizes
export const PLAYER_SIZE = 60;
export const OBSTACLE_SIZE = 60;
export const COIN_SIZE = 50; // Tăng kích thước để dễ nhìn thấy

// Game mechanics
export const INITIAL_SPEED = 3;
export const MAX_SPEED = 12;
export const SPEED_INCREMENT = 0.3;
export const SPEED_INCREMENT_INTERVAL = 50; // meters

// Collision
export const COLLISION_TOLERANCE = PLAYER_SIZE * 0.7;
export const COIN_COLLECTION_RADIUS = 80; // Tăng radius để dễ thu thập coin hơn

// Gesture
export const SWIPE_THRESHOLD_VERTICAL = 60;
