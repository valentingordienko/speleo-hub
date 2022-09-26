import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Germany.svg';

export function Germany(props: TProps) {
  return (
    <Icon {...props} name="Germany">
      <SVG />
    </Icon>
  );
}
