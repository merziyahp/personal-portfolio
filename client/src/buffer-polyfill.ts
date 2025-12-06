
import { Buffer } from 'buffer';

// Make Buffer available globally before any other code runs
(window as any).Buffer = Buffer;
(globalThis as any).Buffer = Buffer;
