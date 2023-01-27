import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Jersey.svg';

export function Jersey(props: TBaseProps) {
  return (
    <Icon {...props} name="Jersey">
      <SVG />
    </Icon>
  );
}
