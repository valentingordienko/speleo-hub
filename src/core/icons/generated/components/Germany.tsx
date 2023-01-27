import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Germany.svg';

export function Germany(props: TBaseProps) {
  return (
    <Icon {...props} name="Germany">
      <SVG />
    </Icon>
  );
}
