import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PostAutomatSolid.svg';

export function PostAutomatSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PostAutomatSolid">
      <SVG />
    </Icon>
  );
}
