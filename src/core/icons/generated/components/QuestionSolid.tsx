import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/QuestionSolid.svg';

export function QuestionSolid(props: TProps) {
  return (
    <Icon {...props} name="QuestionSolid">
      <SVG />
    </Icon>
  );
}
