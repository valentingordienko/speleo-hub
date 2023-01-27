import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreateTemplateOutline.svg';

export function CreateTemplateOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CreateTemplateOutline">
      <SVG />
    </Icon>
  );
}
