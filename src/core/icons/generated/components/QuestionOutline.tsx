import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/QuestionOutline.svg';

export function QuestionOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="QuestionOutline">
      <SVG />
    </Icon>
  );
}
