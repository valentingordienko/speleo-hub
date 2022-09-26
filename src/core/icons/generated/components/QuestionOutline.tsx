import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/QuestionOutline.svg';

export function QuestionOutline(props: TProps) {
  return (
    <Icon {...props} name="QuestionOutline">
      <SVG />
    </Icon>
  );
}
