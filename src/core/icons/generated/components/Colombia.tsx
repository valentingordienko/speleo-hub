import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Colombia.svg';

export function Colombia(props: TBaseProps) {
  return (
    <Icon {...props} name="Colombia">
      <SVG />
    </Icon>
  );
}
