import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreateTemplateSolid.svg';

export function CreateTemplateSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CreateTemplateSolid">
      <SVG />
    </Icon>
  );
}
