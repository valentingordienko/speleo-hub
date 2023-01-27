import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/QuestionSolid.svg';

export function QuestionSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="QuestionSolid">
      <SVG />
    </Icon>
  );
}
