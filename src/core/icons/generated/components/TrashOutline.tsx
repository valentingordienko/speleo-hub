import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TrashOutline.svg';

export function TrashOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TrashOutline">
      <SVG />
    </Icon>
  );
}
