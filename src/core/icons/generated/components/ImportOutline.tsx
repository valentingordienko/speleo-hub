import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ImportOutline.svg';

export function ImportOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ImportOutline">
      <SVG />
    </Icon>
  );
}
