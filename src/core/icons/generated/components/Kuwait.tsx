import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Kuwait.svg';

export function Kuwait(props: TProps) {
  return (
    <Icon {...props} name="Kuwait">
      <SVG />
    </Icon>
  );
}
