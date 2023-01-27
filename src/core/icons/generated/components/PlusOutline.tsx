import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlusOutline.svg';

export function PlusOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PlusOutline">
      <SVG />
    </Icon>
  );
}
