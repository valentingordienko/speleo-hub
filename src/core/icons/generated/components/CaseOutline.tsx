import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CaseOutline.svg';

export function CaseOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CaseOutline">
      <SVG />
    </Icon>
  );
}
