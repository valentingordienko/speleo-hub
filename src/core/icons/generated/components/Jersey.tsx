import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Jersey.svg';

export function Jersey(props: TProps) {
  return (
    <Icon {...props} name="Jersey">
      <SVG />
    </Icon>
  );
}
