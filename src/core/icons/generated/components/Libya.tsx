import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Libya.svg';

export function Libya(props: TProps) {
  return (
    <Icon {...props} name="Libya">
      <SVG />
    </Icon>
  );
}
