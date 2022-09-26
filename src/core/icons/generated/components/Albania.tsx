import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Albania.svg';

export function Albania(props: TProps) {
  return (
    <Icon {...props} name="Albania">
      <SVG />
    </Icon>
  );
}
