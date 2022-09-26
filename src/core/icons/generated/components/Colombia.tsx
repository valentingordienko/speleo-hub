import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Colombia.svg';

export function Colombia(props: TProps) {
  return (
    <Icon {...props} name="Colombia">
      <SVG />
    </Icon>
  );
}
