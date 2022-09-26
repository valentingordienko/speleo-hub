import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlusOutline.svg';

export function PlusOutline(props: TProps) {
  return (
    <Icon {...props} name="PlusOutline">
      <SVG />
    </Icon>
  );
}
