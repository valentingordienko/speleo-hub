import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PensionOutline.svg';

export function PensionOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PensionOutline">
      <SVG />
    </Icon>
  );
}
