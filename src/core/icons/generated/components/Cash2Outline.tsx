import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Cash2Outline.svg';

export function Cash2Outline(props: TBaseProps) {
  return (
    <Icon {...props} name="Cash2Outline">
      <SVG />
    </Icon>
  );
}
