import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddTemplateOutline.svg';

export function AddTemplateOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AddTemplateOutline">
      <SVG />
    </Icon>
  );
}
