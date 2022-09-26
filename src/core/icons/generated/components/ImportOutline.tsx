import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ImportOutline.svg';

export function ImportOutline(props: TProps) {
  return (
    <Icon {...props} name="ImportOutline">
      <SVG />
    </Icon>
  );
}
