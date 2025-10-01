// Nest
import { SetMetadata } from '@nestjs/common';

// Decoration
import { rules } from '../rules.enum';

export const RULES_KEY = 'rules';
export const Rules = (...rules: rules[]) => SetMetadata(RULES_KEY, rules);
