import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Albania.svg';

export function Albania(props: TBaseProps) {
  return (
    <Icon {...props} name="Albania">
      <SVG />
    </Icon>
  );
}
