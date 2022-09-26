import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PensionOutline.svg';

export function PensionOutline(props: TProps) {
  return (
    <Icon {...props} name="PensionOutline">
      <SVG />
    </Icon>
  );
}
