import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Kuwait.svg';

export function Kuwait(props: TBaseProps) {
  return (
    <Icon {...props} name="Kuwait">
      <SVG />
    </Icon>
  );
}
