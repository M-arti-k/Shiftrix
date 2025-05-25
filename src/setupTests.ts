import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';


global.TextEncoder = TextEncoder;
// @ts-expect-error: NodeJS TextEncoder/TextDecoder are close enough
global.TextDecoder = TextDecoder;